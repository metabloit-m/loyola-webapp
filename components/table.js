import React, {useEffect} from "react";


const calculateRange = (data, rowsPerPage) => {
    const num = Math.ceil(data.length / rowsPerPage);
    let range = [];

    for (let i = 1; i <= num; i++) range.push(i);
    return range;
}

const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
}

const useTable = (data, page, rowsPerPage) => {

    const [range, setRange] = React.useState([]);
    const [slice, setSlice] = React.useState([]);

    React.useEffect(() => {
        setRange(calculateRange(data, rowsPerPage))
        setSlice(sliceData(data, page, rowsPerPage))
    }, [page, setSlice, data, setRange])

    return {
        slice,
        tableRange: range
    }
}

const TableFooter = ({range, page, setPage, slice}) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) setPage(page - 1);
    }, [setPage, page, slice])

    return (
        <div className="btn-group justify-center p-4">
            {range.map((element, index) => {
                return (
                    <button key={index} className={`${element === page ? "active" : ""} btn btn-sm`} onClick={() => {
                        setPage(element)
                    }}>
                        {element}
                    </button>
                )
            })}
        </div>
    )
}

export default function Table({data, rowsPerPage}) {

    const [page, setPage] = React.useState(1);
    const {slice, tableRange} = useTable(data, page, rowsPerPage);
    return (
        <>
            <table className="table table-zebra table-compact mx-auto w-full">
                <thead>
                <tr>
                    <td>#</td>
                    <th className="whitespace-normal">First Name</th>
                    <th className="whitespace-normal">Last Name</th>
                    <th className="whitespace-normal">Enrollment year</th>
                    <th className="whitespace-normal">Graduation year</th>
                    <th className="whitespace-normal">Famous Teacher</th>
                    <th className="whitespace-normal">Result (DIV)</th>
                    <th className="whitespace-normal">Current occupation</th>
                    <th className="whitespace-normal">Address</th>
                    <th className="whitespace-normal">Email</th>
                    <th className="whitespace-normal">Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {slice.map(member => {
                    return (
                        <tr key={member._id}>
                            <td></td>
                            <td className="whitespace-normal">{member.first_name}</td>
                            <td className="whitespace-normal">{member.last_name}</td>
                            <td className="whitespace-normal">{member.yoe}</td>
                            <td className="whitespace-normal">{member.yog}</td>
                            <td className="whitespace-normal">{member.fam_teacher}</td>
                            <td className="whitespace-normal">{member.result}</td>
                            <td className="whitespace-normal">{member.occup}</td>
                            <td className="whitespace-normal">{member.address}</td>
                            <td className="whitespace-normal">{member.email}</td>
                            <td className="whitespace-normal">{member.phone}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <TableFooter range={tableRange} page={page} setPage={setPage} slice={slice}/>
        </>

    )

}