import React from 'react'
import { Table } from 'semantic-ui-react'

const BookmarksList = ({ bookmarks }) => {
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
    } else {
        return null
    }
} 

export default BookmarksList