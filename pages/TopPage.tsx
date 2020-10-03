import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Button from '@material-ui/core/Button'

const TopPage = () => {
  const style = { margin: "20px" };

  return (
    <div id="index">
      <Head>
        <title>This is Top page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button variant="contained" style={style}>
          <Link href="/components/gas-app">
            <a>GAS-家計簿</a>
          </Link>
        </Button>

        {/* <Button variant="contained" style={style}>
          <Link href="/components/tweet-history">
            <a>勉強会の参加履歴</a>
          </Link>
        </Button> */}

        <Button variant="contained" style={style}>
          <Link href="/components/dev">
            <a>Dev</a>
          </Link>
        </Button>

        <Button variant="contained" style={style}>
          <Link href="/components/mypage/hoge">
            <a>mypage</a>
          </Link>
        </Button>
      </main>
    </div>
  );
}

export default TopPage
