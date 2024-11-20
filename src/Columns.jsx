import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'id',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'model',
        selector: row => row.model,
        sortable: true,
    },
    {
        name: 'type',
        selector: row => row.type,
        sortable: true,
    }
];
const data = [
    {
        id: 1,
        model: 'Corsa',
        type: 'small'
    },
    {
        id: 2,
        model: 'Astra',
        type: 'family'
    },
    {
        id: 3,
        model: 'Mokka',
        type: 'SUV'
    },
    {
        id: 4,
        model: 'Movano',
        type: 'transporter'
    },
];

export default function CartableByExtComponent() {
    return (
        <>
            <h2>Carmodels</h2>
            <DataTable
                columns={columns}
                data={data}
                selectableRows
            />
        </>
    );
};