$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
        	period: '2013 Q2',
            rating: 5,
            reviewer: 'savedgirl',
            new_topics: "wellness",
            referred_products: "none",
            positive_product_attributes: "all",
            negative_product_attributes: "none",
            buyer_interests: "",
            satisfaction_factors: "sleeps well, does not lose breath",
            undesirable_features: "",
            health_recommendations:  "sleeping",
            sentiment: 'positive'
        }, {
            period: '2014 Q1',
            rating: 5,
            reviewer: 'kshock',
            new_topics: "",
            referred_products: "laptop holder",
            positive_product_attributes: "all",
            negative_product_attributes: "none",
            buyer_interests: "",
            satisfaction_factor: "cheaper than compititors , fast delivery, great packaging", 
            undesirable_features: "",
            health_recommendations:  "Respiratory Problems,  bronchitis",
            sentiment: 'positive'
        }, {
            period: '2013 Q3',
            rating: 4,
            reviewer: 'jrtrini',
            new_topics: "wellness",
            referred_products: "a rolled up cheap pillow",
            positive_product_attributes: "value, Features, ",
            negative_product_attributes: "comfort",
            buyer_interests: "sleep on an incline",
            satisfaction_factor: "good for elevating your head, keep heartburn away",
            undesirable_features: "hard cushion , steep incline, neck has become very stiff and painful",
            health_recommendations:  "Gerd, Gastritis and Esophagitis, good for heartburn, bloating and stomach pain ",
            sentiment: 'negative'
        }, {
            period: '2014 Q2',
            rating: 4,
            reviewer: 'SA1811',
            new_topics: "memory foam",
            referred_products: "none",
            positive_product_attributes: "all",
            negative_product_attributes: "",
            buyer_interests: "sleep on an incline",
            satisfaction_factor: "cheap",
            undesirable_features: "For memory foam, it is a very firm",
            health_recommendations:  "none ",
            sentiment: 'positive'
        }, {
            period: '2015 Q1',
            rating: 5,
            reviewer: 'nana918',
            new_topics: "wellness , rehab",
            referred_products: "none",
            positive_product_attributes: "all",
            negative_product_attributes: "",
            buyer_interests: "none",
            satisfaction_factor: "thicker pillow",
            undesirable_features: "",
            health_recommendations:  "comfortable for knee operation, hip replacement  ",
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
            label: "Online Sales",
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
