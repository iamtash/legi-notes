import React from 'react'
import { Card, Table } from 'semantic-ui-react'
import BookmarksList from './BookmarksList'

const CaseItem = (props) => {
    const { id, number, title, client, bookmarks } = props.kase

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
                            <Table.Row>
                                <Table.HeaderCell>Bookmarks</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <BookmarksList bookmarks={bookmarks} />
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