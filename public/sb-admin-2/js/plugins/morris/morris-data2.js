$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
        	period: '2013 Q2',
            rating: 5,
            reviewer: 'housemaid',
            new_topics: "wellness",
            referred_products: "none",
            positive_product_attributes: "all",
            negative_product_attributes: "none",
            buyer_interests: "nutritious , cream of wheat",
            satisfaction_factors: "cut finer, quick cooking",
            undesirable_features: "none",
            health_recommendations:  "nutritious",
            sentiment: 'positive'
        }, {
            period: '2014 Q1',
            rating: 5,
            reviewer: 'DARVOA',
            new_topics: "wellness",
            referred_products: "none",
            positive_product_attributes: "all",
            negative_product_attributes: "none",
            buyer_interests: "food related to dysphagia and Alzheimer's Disease",
            satisfaction_factor: "Cream of Wheat is easier to swallow and digestng, ship it free", 
            undesirable_features: "unavailable in local supermarkets",
            health_recommendations:  "dysphagia, difficulty swallowing, good for old age, Alzheimer's Disease",
            sentiment: 'positive'
        }, {
            period: '2013 Q3',
            rating: 4,
            reviewer: 'RCWalmartshopper',
            new_topics: "",
            referred_products: "none",
            positive_product_attributes: "value, Features, ",
            negative_product_attributes: "comfort",
            buyer_interests: "nutrienets, glycemic acid, regular cream of wheat",
            satisfaction_factor: "",
            undesirable_features: "gelatinous texture , much lower Glycemic load",
            health_recommendations:  "",
            sentiment: 'negative'
        }, {
            period: '2014 Q2',
            rating: 4,
            reviewer: 'Betterthingstocome',
            new_topics: "",
            referred_products: "none",
            positive_product_attributes: "all",
            negative_product_attributes: "",
            buyer_interests: "whole grain",
            satisfaction_factor: "nutrition",
            undesirable_features: "",
            health_recommendations:  "none ",
            sentiment: 'positive'
        }],
        xkey: 'period',
        ykeys: ['rating', 'reviewer', 'sentiment', 'new_topics','referred_products','positive_product_attributes' , 'negative_product_attributes', 'buyer_interests','satisfaction_factor','undesirable_features','health_recommendations'] ,
        labels: ['rating', 'reviewer', 'sentiment',  'new_topics', 'referred_products','positive_attributes' , 'negative_attributes','buyer_interests','satisfaction','undesirable','health_recommendations'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });
    
});
