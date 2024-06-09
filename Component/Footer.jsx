import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
export default function Footer()
{
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <div className='text-center p-3 ml-28 mr-28' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='https://BrightSparak.com/'>
            BrightSpark.com
          </a>
        </div>
      </MDBFooter>
    )
}

