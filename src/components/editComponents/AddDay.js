import '../../App.css'
//display day as addable object 
const AddDay = (props) => { 
    return(
        <div
        className="exercises" 
        style={{
          display: "box",
          flexDirection: "row",
          alignItems: "left",
          background: "white",
          margin : 8
        }
        
        } >
                <li>
                <div className="exercises-thumb">
                    <img src={'/images/dumbell.png'} alt={`${props.item.title} Thumb`} />
                </div>
                <p>
                    { props.item.title }
                </p> 
                <div className="exercises-thumb" style={{marginLeft:0, background:"white", width:80, height:80, cursor:'pointer'}}>
                    {/* adds day to the program when clicked */}
                    <img src={'/images/plus.png'} alt={`${'Wed'} Thumb`} onClick={() => props.addDay(props.item)}/>
                </div>
                </li>
                </div>
    )
}
export default AddDay