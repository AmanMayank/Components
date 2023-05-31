function Table({data}) {

  const renderedTable =  data.map((row) => {
        return <tr className="border-b" key={row.name}>
            <td className="p-3">{row.name}</td>
            <td className="p-3"><div className={`p-3 m-2 ${row.color}`}></div></td>
            <td className="p-3">{row.score}</td>
          </tr>
    })
 
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>Fruits</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
          {renderedTable}
      </tbody>
    </table>
  )
}

export default Table