import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../HomeComponent/footer.css';

const List = (props) => {
    const { header, item1, item2, item3, item4, item5 } = props;
    return (
        <div className="listContent">

            <ul
                className="list"
                type="none">
                <h4
                    className="headerTitle"
                >
                    {header}
                </h4>
                <li className="item">{item1}</li>
                <li className="item">{item2}</li>
                <li className="item">{item3}</li>
                <li className="item">{item4}</li>
                <li className="item">{item5}</li>
            </ul>
        </div>
    );
}

export default List;