import Button from "../components/Button"

function ButtonPage(){

    const handleClick = () => {
        console.log("button clicked!!")
    }

    return(
        <div>
            <div>
                <Button className='mb-5 mt-5' onClick={handleClick} success rounded outline>Button 1</Button>
            </div>
            <div>
                <Button danger outline>Button 2</Button>
            </div>
            <div>
                <Button warning>Button 3</Button>
            </div>
            <div>
                <Button secondary outline>Button 4</Button>
            </div>
            <div>
                <Button primary rounded>Button 5</Button>
            </div>
        </div>
    )
}

export default ButtonPage