import React from 'react';
import "../../assets/style/custom.scss";
import {Link, navigate} from 'gatsby';
import { Button } from 'react-bootstrap';
import {FaArrowRight} from 'react-icons/fa'

export default function GetStarted()
{
    return(
        <Button as="button" onClick={()=>{navigate('/dgraphGraphQL/')}} bsPrefix="button button--primary mr-0 mr-md-4">
           <span>Get Started &nbsp;&nbsp;&nbsp;<FaArrowRight/></span>
        </Button>
    )
}