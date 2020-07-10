import React from 'react';

const config = require("../../config");

export default function InPageCurrentPageSideBar(props)
{
    return (
        <div className="inpage-sidebar">
            <ul>
                {
                    config.sidebarOptions[props.currentPageIndex].inPageLinkSideBar.map(currentPage=>{
                        console.log(currentPage.name)
                        return(
                            <li>
                                {currentPage.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}