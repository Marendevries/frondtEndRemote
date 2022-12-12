import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircleIcon from '@mui/icons-material/Circle';


const List = () => {

    const rows = [
        {
            
            id: 1,
            naam: "Maren de Vries",
            aantalRouters: 67,
            email: "marendevries@hotmail.com",
            adres: "van Goghlaan 21",
            status: "groen",
            icon: (<CircleIcon className="icon orange"/>)
        },
        {
            
            id: 1,
            naam: "Johan de Jong",
            aantalRouters: 344,
            email: "johan@hotmail.com",
            adres: "Julianalaan 33",
            status: "groen",
            icon: (<CircleIcon className="icon red"/>)
        },
        {
            
            id: 1,
            naam: "Lisa Scheffer",
            aantalRouters: 17,
            email: "Lisa@hotmail.com",
            adres: "Hoofdstraat 88",
            status: "groen",
            icon: (<CircleIcon className="icon green"/>)
        },


    ]
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Naam</TableCell>
          <TableCell className="tableCell">Aantal routers</TableCell>
          <TableCell className="tableCell">E-mail</TableCell>
          <TableCell className="tableCell">Adres</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="tableCell">{row.id}</TableCell>
            <TableCell className="tableCell">{row.naam}</TableCell>
            <TableCell className="tableCell">{row.aantalRouters}</TableCell>
            <TableCell className="tableCell">{row.email}</TableCell>
            <TableCell className="tableCell">{row.adres}</TableCell>
            <TableCell className="tableCell">{row.icon}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default List