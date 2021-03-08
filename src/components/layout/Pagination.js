import React from 'react'

const MAX_ITEMS = 5;
let MAX_LEFT = (MAX_ITEMS - 1) / 2;

let timestamp = new Date().getTime();

const Pagination = ({limit, total, offset, setOffset}) => {

    const current = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(current - MAX_LEFT, 1);

    function onPageChange(page) {
        setOffset((page - 1) * limit)
    }

    
    return (
        <ul className="pagination ">
            <li>
                <button className={current === 1 ? 'hide' : 'pagination__item'} onClick={() => onPageChange(1)} >&#60;&#60;</button>
            </li>
            <li>
                <button className={current === 1 ? 'hide' : 'pagination__item'} onClick={() => onPageChange(current - 1)} >&#60;</button>
            </li>
            {Array.from({length: MAX_ITEMS})
            .map((_, index) => index + first )
            .map((page) => (
                <li key={timestamp = timestamp + 1}>
                    <button className={(page > pages ? 'hide' : (page === current ? 'pagination__item--active' : 'pagination__item'))} onClick={() => setOffset((page - 1) * limit)}>{page}</button>
                </li> 
            ))}
            <li>
                <button onClick={() => onPageChange(current + 1)} disabled={current === pages} className={current === pages ? 'hide' : 'pagination__item'} >&#62;</button>
            </li>
            <li>
                <button onClick={() => onPageChange(pages)} className={current === pages ? 'hide' : 'pagination__item'} >&#62;&#62;</button>
            </li>
        </ul>
    )
}

export default Pagination