import React from "react";
import Event from "./Event";

const Grid = () => {
    // Create a grid for all the event cards
    // Stretch goal: create a filter for the events, embed google maps location and maps, time and organizer
    return (
        <div className="Grid">
            <Event title='Group Drawing Event' 
                des='This is an event where you can do plein airs with people from your area.'
                img='/assets/child_drawing.png'/>
            <Event title='Group Yoga Session' 
                des='Join us on a mindful stretching session!'
                img='/assets/yoga.png'/>
            <Event title='Neighborhood Clean Up' 
                des='Help pick up trash and creating a more beautiful community! Psst..you can also gossip with your friends.'
                img='/assets/cleanup.png'/>
            <Event title='Summer Movie Night' 
                des='Come watch a movie (Spirited Away) with us on the park lawn!'
                img='/assets/movie.png'/>
            <Event title='Potluck: Best Cake Contest' 
                des='Come eat cake with us and see who has the best cake in town! Everyone including home cooks and professionals are welcomed.'
                img='/assets/cake.png'/>
            <Event title='Handmade Market: Local Artisans' 
                des='Shop jewelry, pottery, and crafts from 20+ neighborhood makers.'
                img='/assets/child_drawing.png'/>
            <Event title='Used Book Swap & Latte Bar' 
                des='Trade books and sip home made coffee with each other.'
                img='/assets/book.png'/>
            <Event title='Handmade Market: Local Artisans' 
                des='Shop jewelry, pottery, and crafts from 20+ neighborhood makers.'
                img='/assets/market.png'/>
            <Event title='DIY Terrarium Workshop' 
                des='Build your own mini garden—all supplies provided. Let us make more arts and crafts together!'
                img='/assets/terrarium.png'/>
            <Event title='5K Color Run for Kids’ Education' 
                des='Dash through rainbow powder to support school supplies for local students.'
                img='/assets/run.png'/>
            
        </div>
        

    )

}

export default Grid;