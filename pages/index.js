import React from 'react'
import cxs from 'cxs'
import NoSSR from 'react-no-ssr'

export default class Index extends React.Component {
  componentDidMount(){
    if (typeof window !== 'undefined') {
      const styleTag = document.querySelector("[data-glamor]");
      const serverCss = styleTag.innerHTML

      cxs.reset()
      // cxs.rehydrate(serverCss)
    }
  }
  render() {
    return(
      <div className={cx.root}>
        <h1 className={cx.title}>My page</h1>
        <NoSSR >
          <Box/>
        </NoSSR>
      </div>
    )
  }
}



const cx = {
  root: cxs({
    width: 80,
    height: 60,
    background: 'white',
    ':hover': {
      background: 'black'
    }
  }),

  title: cxs({
    marginLeft: 5,
    color: 'red',
    fontSize: 22,
    ':hover': {
      color: 'white'
    }
  })
}

const Box = (props) => {
  return (
    <div {...props} className={className} />
  )
}

const className = cxs({
  padding: 32,
  backgroundColor: 'tomato'
})
