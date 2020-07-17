
  export const getCurrentPageURL = (props)=>{
    switch(props.pageURL)
    {
      case '/Schema':
        return `sidenav-right-${props.pageURL.toLowerCase().slice(1,props.pageURL.length)}`;

        default :
        return 'sidenav-right';
    }
    
  }