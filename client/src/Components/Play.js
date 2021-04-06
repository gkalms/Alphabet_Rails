import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Alphabet = (props) => {

    return (
        <div id="play">
            <form>
                <div className="row" id="row1">
                    <Button variant="primary" value="A" onClick={props.handleClick}>A</Button>
                    <Button variant="primary" value="B" onClick={props.handleClick}>B</Button>
                    <Button variant="primary" value="C" onClick={props.handleClick}>C</Button>
                    <Button variant="primary" value="D" onClick={props.handleClick}>D</Button>
                    <Button variant="primary" value="E" onClick={props.handleClick}>E</Button>
                    <Button variant="primary" value="F" onClick={props.handleClick}>F</Button>
                    <Button variant="primary" value="G" onClick={props.handleClick}>G</Button>
                </div>
                <div className="row" id="row2">
                    <Button variant="info" onClick={props.handleClick} value="H">H</Button>
                    <Button variant="info" onClick={props.handleClick} value="I">I</Button>
                    <Button variant="info" onClick={props.handleClick} value="J">J</Button>
                    <Button variant="info" onClick={props.handleClick} value="K">K</Button>
                    <Button variant="info" onClick={props.handleClick} value="L">L</Button>
                    <Button variant="info" onClick={props.handleClick} value="M">M</Button>
                    <Button variant="info" onClick={props.handleClick} value="N">N</Button>
                </div>
                <div className="row" id="row3">
                    <Button variant="success" onClick={props.handleClick} value="O">O</Button>
                    <Button variant="success" onClick={props.handleClick} value="P">P</Button>
                    <Button variant="success" onClick={props.handleClick} value="Q">Q</Button>
                    <Button variant="success" onClick={props.handleClick} value="R">R</Button>
                    <Button variant="success" onClick={props.handleClick} value="S">S</Button>
                    <Button variant="success" onClick={props.handleClick} value="T">T</Button>
                    <Button variant="success" onClick={props.handleClick} value="U">U</Button>
                </div>
                <div className="row" id="row4">
                    <Button variant="warning"></Button>
                    <Button variant="warning" onClick={props.handleClick} value="V">V</Button>
                    <Button variant="warning" onClick={props.handleClick} value="W">W</Button>
                    <Button variant="warning" onClick={props.handleClick} value="X">X</Button>
                    <Button variant="warning" onClick={props.handleClick} value="Y">Y</Button>
                    <Button variant="warning" onClick={props.handleClick} value="Z">Z</Button>
                    <Button variant="warning"></Button>
                </div>
            </form>
        </div >
    );
};