import React from 'react'

export default function Dashboardlayout(
    {feed,stats}:{feed:React.ReactNode;
stats:React.ReactNode;
    }
) {
    
  return (
    <div style={{display:'flex',gap:'20px'}}>
        <div style={{flex:2}}>{feed}</div>
        <div style={{flex:1}}>{stats}</div>
    </div>
  )
}

