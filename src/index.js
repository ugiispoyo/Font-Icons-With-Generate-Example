import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import '../scss/styles-for-example.scss';
import listIcons_ from '../icons-list.json';


export default function IconList() {

    const [listIcons, setListIcons] = useState([]);
    const [searchIcon, setSearchIcon] = useState('');

    useEffect(() => {
        if(listIcons.length == 0) {
            addListIcons();
        }
    })
    // useEffect(() => {

        // addListIcons();
        // let listArr = listIcons.filter(icons => icons.includes(searchIcon));
        // setListIcons(listArr);
        
        // if(searchIcon == ''){
        //     setListIcons([]);
        //     addListIcons();
        // } 

        // return () => {
        //     document.getElementsByClassName('wrap-box-icon').innerHTML = '';
        //     renderList();
        // }

    // }, [searchIcon])

    const addListIcons = () => {
        listIcons_.map(value =>
            setListIcons(listIcons => [...listIcons, value.slice(6, value.length).slice(0, value.slice(6, value.length).length - 4)])
        )
    }

    const copyClass = (id) => {

        const el = document.createElement('textarea');

        el.value = document.getElementById(id).value;
        document.body.appendChild(el);
        el.select();

        document.execCommand('copy');
        document.body.removeChild(el);

        var tooltip = document.getElementById("myTooltip-"+id);
        tooltip.innerHTML = "Class copied: " + document.getElementById(id).value;

        console.log(document.getElementById(id).value);

    }

    const outFunc = (id) => {
        var tooltip = document.getElementById("myTooltip-"+id);
        tooltip.innerHTML = "Copy class to clipboard";
    }

    const renderList = () => (
        listIcons.length != 0 ?
            listIcons.map((value, key) =>
                <div className="box-icon" key={key}>
                    <div className="tooltip">
                        <button  style={{ position: 'absolute', right: '5px', top: '0px', cursor: 'pointer'}}
                            onClick={() => copyClass(value) } onMouseOut={() => outFunc(value) }>
                            <span className="tooltiptext" id={"myTooltip-"+value}>Copy class to clipboard</span>
                            Copy
                        </button>
                        <input style={{display: 'none'}} defaultValue={"icon icon-"+value+""} id={value} />
                    </div>
                    <i className={"icon icon-"+ value}></i>
                    <span style={{ fontWeight: 'bold'}}>{value}</span>
                </div>
            )
        :
            <span style={{ marginLeft: '7px', color: 'red'}}>Tidak ditemukan!</span>
    )
    

    return (
        <div className="wrap">
            <div className="form-search">
                {/* <input type="text" placeholder="Cari icons kamu.." value={searchIcon} onChange={(e) => setSearchIcon(e.target.value)} /> */}
                <span>Total icon: <b>{listIcons.filter(icons => icons.includes(searchIcon)).length}</b></span>
            </div>
            {/* <div className="wrap-box-icon"> */}
                {
                    renderList()
                }
            {/* </div> */}
            <div className="box-example">
                <h1>Contoh penggunaan:</h1>
                <p>
                    Copy file my-font-icons.css yang berada di dalam folder css, copy folder 
                    my-web-fonts & paste keduanya ke dalam folder project anda.<br/>
                    Berikut di bawah ini adalah kode untuk cara memanggil font iconsnya
                </p>
                <pre>
                    {"<i class=icon icon-"+listIcons[0]+"></i>"}
                </pre>
            </div>
        </div>
    )
}


ReactDOM.render(<IconList />, document.getElementById('root'));