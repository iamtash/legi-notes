import React from 'react'
import { Card, Table } from 'semantic-ui-react'
import './CaseItem.css'

const CaseItem = (props) => {
    const { id, number, title, client, bookmarks } = props.kase

    const renderBookmarks = () => {
        if (bookmarks && bookmarks.length > 0) {
            return bookmarks.map(bookmark => {
                return (
                    <Table.Row key={bookmark.id}>
                        <Table.Cell>
                            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                                {bookmark.bill_number}
                            </a>
                        </Table.Cell>
                    </Table.Row>
                )
            })
        }
    } 

    const renderContent = () => {
        return (
            <>
            <Card.Content>
                <Card.Header content={title} />
                <Card.Meta content={number} />
            </Card.Content>
            <Card.Content>
                <Card.Description>
                    <div className="right floated">Client: {client}</div>
                    <Table basic="very">
                        <Table.Header>
                            <Table.Row><Table.HeaderCell>Bookmarks</Table.HeaderCell></Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {renderBookmarks()}
                        </Table.Body>
                    </Table>
                </Card.Description>
            </Card.Content>
            </>
        )
    }

    const renderCard = () => {
        if (props.onCaseSelect) {
            return (
                <Card raised onClick={() => props.onCaseSelect(id)} >
                    {renderContent()}
                </Card>
            )
        } else {
            return (
                <Card raised>
                    {renderContent()}
                </Card>
            )
        }
    }

    return renderCard()
}

export default CaseItem