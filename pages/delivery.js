import React from 'react';
import Layout from '../components/layout/Layout'
import PageBanner from '../components/PageBanner'
import Delivery from '../components/Delivery'

const DeliveryIndex = () => {
    return (
        <Layout>
            <PageBanner
                title={"WEED DELIVERY PITT MEADOWS"}
                pageName={"Delivery"}
                background={"primaryDelivery.af866be2.png"}
            />
            <Delivery />
        </Layout>
    )
}

export default DeliveryIndex