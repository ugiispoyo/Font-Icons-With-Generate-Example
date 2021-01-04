import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import '../scss/styles-for-example.scss';
import listIcons_ from '../icons-list.json';


export default function IconList() {

    const [listIcons, setListIcons] = useState([]);
    const [searchIcon, setSearchIcon] = useState('');

    useEffect(() => {
        if(listIcons.length == 0){
            addListIcons()
        }
    })

    const addListIcons = () => {
        listIcons_.map(value =>
            setListIcons(listIcons => [...listIcons, value.slice(6, value.length).slice(0, value.slice(6, value.length).length - 4)])
        )
    }

    const copyClass = (id) => {

        const el = document.createElement('textarea');

        el.value = document.getElementById("value-"+id).value;
        document.body.appendChild(el);
        el.select();

        document.execCommand('copy');
        document.body.removeChild(el);

        var tooltip = document.getElementById("myTooltip-"+id);
        tooltip.innerHTML = "Class copied: " + document.getElementById("value-"+id).value;

    }

    const outFunc = (id) => {
        var tooltip = document.getElementById("myTooltip-"+id);
        tooltip.innerHTML = "Copy to clipboard";
    }
    

    return (
        <div className="wrap">
            <div className="form-search">
                <input type="text" placeholder="Cari icons kamu.." value={searchIcon} onChange={(e) => setSearchIcon(e.target.value)} />
                <span>Total icon: <b>{listIcons.filter(icons => icons.includes(searchIcon)).length}</b></span>
            </div>
            {
                listIcons.filter(icons => icons.includes(searchIcon)).length != 0 ?
                    listIcons.filter(icons => icons.includes(searchIcon)).map((value, key) =>
                        <div className="box-icon" key={key}>
                            <div className="tooltip">
                                <button  style={{ position: 'absolute', right: '5px', top: '0px', cursor: 'pointer'}}
                                    onClick={() => copyClass(key) } onMouseOut={() => outFunc(key) }>
                                    <span className="tooltiptext" id={"myTooltip-"+key}>Copy class</span>
                                    Copy
                                </button>
                            </div>
                            <i className={"icon icon-"+ value}></i>
                            <span style={{ fontWeight: 'bold'}}>{value}</span>
                            <input style={{display: 'none'}} defaultValue={"icon icon-"+value+""} id={"value-"+key} />
                        </div>
                    )
                :
                    <span style={{ marginLeft: '7px', color: 'red'}}>Tidak ditemukan!</span>
            }
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