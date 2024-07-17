import React, { useState } from 'react'

const Search = () => {

    const availableCodes = [
        100,
        101,
        102,
        103,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        218,
        226,
        300,
        301,
        302,
        303,
        304,
        305,
        306,
        307,
        308,
        400,
        401,
        402,
        403,
        404,
        405,
        406,
        407,
        408,
        409,
        410,
        411,
        412,
        413,
        414,
        415,
        416,
        417,
        418,
        419,
        420,
        421,
        422,
        423,
        424,
        425,
        426,
        428,
        429,
        430,
        431,
        440,
        444,
        449,
        450,
        451,
        460,
        463,
        464,
        494,
        495,
        496,
        497,
        498,
        499,
        500,
        501,
        502,
        503,
        504,
        505,
        506,
        507,
        508,
        509,
        510,
        511,
        520,
        521,
        522,
        523,
        524,
        525,
        526,
        527,
        529,
        530,
        561,
        598,
        599,
        999
       ]
    
    const [searchCodes, setSearchCodes] = useState([]);
    const [inputCode, setInputCode] = useState('')

    const filterCodes = (input) => {
        const regexPattern = input.replace(/x/g, '\\d');
        const regex = new RegExp(`^${regexPattern}`);
        setSearchCodes(availableCodes.filter(code => regex.test(code.toString()))); 
    }

  return (
    <div>
        <input 
            className='border-solid border-2 border-black p-2'
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
        />
        <button onClick={()=>filterCodes(inputCode)} >Search</button>
        <div>
            {
                searchCodes.map((code,index) =>{
                    const url = `https://http.dog/${code}.jpg`
                    return(
                        <div key={index}>
                            <p className='border-solid border-2 border-black p-2 w-fit h-fit' key={index}>
                                <img className='w-44' src={url} alt="" />
                            </p>
                        </div>
                    )
                } 
                )
            }
        </div>
    </div>
  )
}

export default Search