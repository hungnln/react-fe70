import { Route } from "react-router-dom"
import HeaderHome from "../Components/HeaderHome/HeaderHome"

export const HomeTemplate = (props) => {
    return <Route exact path={props.path} render={
        (propsRouter) => {
            return <>
                <HeaderHome />
                <props.component {...propsRouter} />
            </>
        }
    }
    />
}