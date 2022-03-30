const stateDefault = {
    gioHang: [
        { maSP: 1, tenSP: 'Iphone', giaBan: 1000, soLuong: 3, hinhAnh: 'https://picsum.photos/200' }
    ]
}
export const gioHangReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            let gioHang = [...state.gioHang];
            let spGioHang = { ...action.sanPham, soLuong: 1 };
            //kiểm tra sp đó có trong gio hàng hay chưa

            let sp = gioHang.find(sanPham => sanPham.maSP === spGioHang.maSP);
            if (sp) {
                //Nếu sản phẩm dispatch lên có trogn giỏ hàng rồi => tăng số lương
                sp.soLuong += 1;
            } else {
                gioHang.push(spGioHang);
            }
            //gán lại giỏ hàng redux = giỏ hàng đã xử lí
            state.gioHang = gioHang;
            console.log(state.gioHang);
            return { ...state }
        }
        default: return state;
    }
}