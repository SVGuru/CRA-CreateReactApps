const MyCard = () => {

     return (
      <div className="card bg-warning ">
        <img className="card-img-top" src="holder.js/100x180/" alt="Title" />

        <h1>Hello Cards!</h1>

        <div className="card-body bg-info">
            <h4 className="card-title">First card</h4>
            <p className="card-text">Text</p>
        </div>

        <div className="card-body bg-warning">
            <h4 className="card-title">Second card</h4>
            <p className="card-text">Text</p>
        </div>
      </div>
    
     )

}

export default MyCard;