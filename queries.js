/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      description
      type
      image
      address
      featured
      price
      orders {
        items {
          id
          item_id
          order_id
          createdAt
          updatedAt
          itemOrdersId
          orderItemId
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      itemOrderItemId
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        type
        image
        address
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
        itemOrderItemId
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      user
      date
      total
      Item {
        items {
          id
          item_id
          order_id
          createdAt
          updatedAt
          itemOrdersId
          orderItemId
          customer
        }
        nextToken
      }
      createdAt
      updatedAt
      itemOrderOrderId
      customer
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        date
        total
        Item {
          nextToken
        }
        createdAt
        updatedAt
        itemOrderOrderId
        customer
      }
      nextToken
    }
  }
`;
