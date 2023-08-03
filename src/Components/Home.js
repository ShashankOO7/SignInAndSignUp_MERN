import React from "react";
import style from "./style.module.css";
import { Button } from "reactstrap";

const Home=()=>{
    return(
        <div>
            <div className={style.head}>
                <h1 className="display-3">Hello from Home</h1>
                <p>This is a basic MERN App</p>
                <Button color="primary" outline>Start Learning</Button>
            </div>
        </div>
    )
}
export default Home