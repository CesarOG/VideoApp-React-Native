import React, { Component } from "react";
import { FlatList, Text } from "react-native";
import Layout from "../components/suggestion-list-layout";

class SuggestionList extends Component {
  render() {
    const list = [
      {
        key: 1,
        title: "César"
      },
      {
        key: 2,
        title: "Marcelo"
      }
    ];
    return (
      <Layout title="Recomendado para ti">
        <FlatList
          data={list}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </Layout>
    );
  }
}

export default SuggestionList;
