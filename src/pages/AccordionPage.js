import Accordion from "../components/Accordion"

function AccordionPage(){
    const items = [
        {
            id:'asdad',
            label : 'Can I use react on Project?',
            content : 'You can use react on any project you want to as it is user friendly'
        },
        {
            id:'dfgddg',
            label : 'Can I use java on Project?',
            content : 'You can use react on any project you want to as it is user friendly'
        },
        {
            id:'sdfsdf',
            label : 'Can I use angular on Project?',
            content : 'You can use react on any project you want to as it is user friendly'
        }
    ]

    return <Accordion items={items}/>
}

export default AccordionPage