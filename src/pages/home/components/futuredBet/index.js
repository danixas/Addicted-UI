import { React } from "react";
import { Badge, Button } from "react-bootstrap";
import { IoIosHelpCircleOutline, IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import "./styles.scss";

const FuturedBet = ({ title, ...props }) => {
    return (
        <div {...props} className="popular_bet__card">
            <div className="header">
                <Badge>&#8226; Popular</Badge>
                <div className="date">
                    21 Apr in <span>19:00</span>
                </div>
                <IoIosHelpCircleOutline size={24}></IoIosHelpCircleOutline>
            </div>
            <div className="body">
                <h1>{title}</h1>
                <div className="info">+4 custom options</div>
                <div className="author">
                    Created by <span>Admin</span>
                </div>
            </div>
            <div className="bet_btn__container">
                <div className="heart__btn mr-2">
                    <Button variant="danger">
                        <FaHeart size={13} />
                    </Button>
                </div>

                <div className="bet__btn mr-2">
                    <Button variant="warning">
                        <IoMdArrowUp color="white" style={{marginBottom: 3}}/>
                        1.35
                    </Button>
                </div>

                <div className="bet__btn">
                    <Button variant="warning">
                        <IoMdArrowDown color="white" style={{marginBottom: 2}}/>
                        3.05
                    </Button>
                </div>
            </div>
            <div className="footer">
                <h1>Bet details</h1>
            </div>
        </div>
    );
};

export default FuturedBet;
