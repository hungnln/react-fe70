import axios from "axios";

//closure function
export const getAllTaskAction = () => {
    return async (dispatch, getState) => {
        //getState là hàm dùng để lấy giá trị từ rootReducer
        try {
            let result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
                method: 'GET'
            });
            const action = {
                type: 'GET_ALL_TASK',
                arrTask: result.data
            }
            dispatch(action);
            //thực thi
        } catch (err) {
            console.log(err);
        }
    }
}
export const addTaskAction = (task) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
                method: 'POST',
                data: task
            })
            console.log('result', result.data);
            //Sau khi thêm task thành công => dispatch logic getAllTask
            const action = getAllTaskAction();
            dispatch(action)
            /*
            Nếu làm theo cách bth
            Gọi axios thêm lấy dữ liệu về => dispatch lên reducer xử lí
            Gọi axios get all
            dispatch giá trị sau khi getAll cho reducer xử lí
            */
        }
        catch (err) {
            console.log(err);
        }
    }
}

export const doneTaskAction = (taskName) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=' + taskName,
                method: 'PUT'
            })
            //Cập nhật thành công => gọi getAllTaskAction
            await dispatch(getAllTaskAction())
        } catch (error) {
            console.log(error);
        }
    }
}
export const rejectTaskAction = (taskName) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=' + taskName,
                method: 'PUT'
            })
            //Cập nhật thành công => gọi getAllTaskAction
            await dispatch(getAllTaskAction())
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteTaskAction = (taskName) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=' + taskName,
                method: 'DELETE'
            })
            //Delete thành công => gọi getAllTaskAction
            await dispatch(getAllTaskAction())
        } catch (error) {
            console.log(error);
        }
    }
}