import React from 'react'
import { Table } from 'semantic-ui-react'

const DataTable = ({ sponsor_title, sponsor_name, sponsor_party, sponsor_state, committees, summary, introduced_date, latest_major_action_date, latest_major_action}) => {
    const intro = new Date(introduced_date).toDateString()
    const action = new Date(latest_major_action_date).toDateString() + ' - ' + latest_major_action

    return (
        <Table striped>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>Sponsor</Table.Cell>
                    <Table.Cell>{`${sponsor_title} ${sponsor_name} [${sponsor_party}-${sponsor_state}]`}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Committee</Table.Cell>
                    <Table.Cell>{committees || "Not yet assigned"}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Introduced</Table.Cell>
                    <Table.Cell>{intro}</Table.Cell>
                </Table.Row>
                <Table.Row> 
                    <Table.Cell>Latest major action</Table.Cell>
                    <Table.Cell>{action}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

export default DataTable