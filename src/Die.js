function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <div 
            className="dice" 
            style={styles}
            onClick={props.holdDice}
        >
            <h2 className="dice-number">{props.value}</h2>
        </div>
    )
}

export default Die