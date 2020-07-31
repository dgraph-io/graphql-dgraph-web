import {connect} from 'react-redux';
import React from 'react';

const getHitTableOfContent = (searchKeyowrd , tableOfContentArray) =>{

  return  tableOfContentArray.map((itemValue , index)=>{
        
        if(itemValue.title!== undefined)
        {
            let targetUrl = itemValue.title.split('>')[2];
            // targetUrl=targetUrl.toString().split('>');
            // targetUrl = targetUrl.toString().split('/')[0]
            // targetUrl=targetUrl.toString().split(',')[0];
            // targetUrl=targetUrl.split('')

            if(JSON.stringify(itemValue.title).includes(searchKeyowrd))
            {
                return targetUrl
            }
        }
    })

}

const SearchKeyowrdComponent = (props) =>{

    let tableHit = getHitTableOfContent(props.searchKeyowrd , props.tableOfContentArray);

    return (
        <span>
            {tableHit === ''?props.searchKeyowrd:tableHit}
        </span>
    )
}

const mapStateToProps = state =>{
    return{
        searchKeyowrd:state.searchKeyowrd
    }
}

export default connect(mapStateToProps)(SearchKeyowrdComponent);