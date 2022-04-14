import React from 'react';

const App = () => {
  const [newsItems, setNewsItems] = React.useState([]);
  const scrollBar = React.useRef();

  // Empty 2nd argument to only run on initial render
  React.useEffect(() => {
    setNewsItems(getNewsItems(20));
  }, [])

  /*
    {
      title: string,
      author: string,
      description: string
    }
  */
 
  const getNewsItems = (num) => {
    let items = [];
    for ( let i = 0; i < num; i++ ) {
      items.push({
        title: "Article " + Math.floor(Math.random()*1000),
        author: "Bob " + Math.floor(Math.random()*1000),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus nulla sit amet purus ultricies commodo. Duis et lectus urna. Donec vitae nisi dignissim, congue elit quis, pulvinar dui. Maecenas ac erat eu lacus eleifend bibendum. Nullam ante lacus, venenatis quis ligula id, facilisis fringilla mi. Morbi malesuada maximus facilisis."
      })
    }
    return items;
  }

  const handleScroll = () => {
    let {scrollHeight, scrollTop, offsetHeight} = scrollBar.current;

    // Add border height since scrollHeight doesn't include borders
    if (scrollTop + offsetHeight === scrollHeight + 4)
      setNewsItems(newsItems.concat(getNewsItems(20)));
  }

  return (
    <div ref={scrollBar} className="App" onScroll={handleScroll}>
      {newsItems.map((newsItem, idx) => (
        <div key={idx} className = "news-item">
          <div className="title">{newsItem.title}</div>
          <div className="author">{newsItem.author}</div>
          <div className="description">{newsItem.description}</div>
        </div>
      ))}
    </div>
  )
}

export default App;