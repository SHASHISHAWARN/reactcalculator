import React ,{useState}from 'react'

function MiddleBox() {
    let a=[['7','8','9','/'],['4','5','6','*'],['1','2','3','-'],['0','.','+','=']]
    const [input,setInput]=useState(a)
    const [styleBox,setstyleBox]=useState({display:'flex',justifyContent:"center",alignItems:'center',border:'2px solid red',padding:'12px',margin:'5px',borderRadius:'5px',cursior:'pointer'})
    return (
        <>
           <div style={{display:'flex',justifyContent:"center",alignItems:'center',border:'2px solid blue'}}>
             
             {
               input[0].map((ele,index)=>{
                return <div style={styleBox}>{ele}</div>
               })
             }
            
            </div>    
            <div style={{display:'flex',justifyContent:"center",alignItems:'center',border:'2px solid blue'}}>
             
             {
               input[1].map((ele,index)=>{
                return <div style={styleBox}>{ele}</div>
               })
             }
            
            </div> 
            <div style={{display:'flex',justifyContent:"center",alignItems:'center',border:'2px solid blue'}}>
             
             {
               input[2].map((ele,index)=>{
                return <div style={styleBox}>{ele}</div>
               })
             }
            
            </div>  
            <div style={{display:'flex',justifyContent:"center",alignItems:'center',border:'2px solid blue'}}>
             
             {
               input[3].map((ele,index)=>{
                return <div style={styleBox}>{ele}</div>
               })
             }
            
            </div>         
        </>
    )
}

export default MiddleBox
