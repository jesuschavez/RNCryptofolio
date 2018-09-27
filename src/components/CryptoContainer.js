import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoContainer extends Component {

    componentWillMount() {
        this.props.FetchCoinData();
        // Chart container would fire off the fetching function
    }

    renderCoinCards() {
        //this props holds the data that was fetched
        const { crypto } = this.props;
        return crypto.data.map((coin) =>
          
        )
    }


    render() {

        const { crypto } = this.props;
        const { contentContainer } = styles;

        if (crypto.isFetching) {
            return (
                <View>

                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        )

    }
}

const styles = {
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.cryptoData
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)
