import React from 'react'
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'
import { Helmet } from 'react-helmet'
import XSushiSign from '../../assets/images/xsushi-text-sign.png'
import InfoCard from './InfoCard'
import APRCard from './APRCard'
import StakeCard from './StakeCard'
import BalanceCard from './BalanceCard'
import { ChainId } from 'quest-regoswap-sdk'
import { SUSHI, XSUSHI, REGO, xREGO } from '../../constants'
import useTokenBalance from '../../hooks/useTokenBalance'

const mockData = {
    sushiEarnings: 345.27898,
    weightedApr: 15.34
}

export default function XSushi() {
    const { account, chainId } = useActiveWeb3React()

// mainnet    
    // const sushiBalance = useTokenBalance(SUSHI[ChainId.MAINNET]?.address ?? '')
    // const xSushiBalance = useTokenBalance(XSUSHI?.address ?? '')

// Rinkeby
    
    // const sushiBalance = useTokenBalance(RADIO[ChainId.RINKEBY]?.address ?? '')
    // const xSushiBalance = useTokenBalance(xRadio?.address ?? '')
  
// matic    
    const sushiBalance = useTokenBalance(
        (chainId === ChainId.MATIC)
        ? 
        REGO[ChainId.MATIC]?.address ?? ''
        :
        (chainId === ChainId.RINKEBY)
        ? 
        REGO[ChainId.RINKEBY ]?.address ?? ''
        :
        (chainId === ChainId.BSC_TESTNET)
        ? 
        REGO[ChainId.BSC_TESTNET ]?.address ?? ''
        :
        (chainId === ChainId.MAINNET)
        ? 
        REGO[ChainId.MAINNET ]?.address ?? ''
        :
        REGO[ChainId.BSC ]?.address ?? ''
        )
        
    const xSushiBalance = useTokenBalance(
        (chainId === ChainId.MATIC)
        ?
        xREGO[ChainId.MATIC]?.address ?? ''
        :
        (chainId === ChainId.RINKEBY)
        ?
        xREGO[ChainId.RINKEBY]?.address ?? ''
        :
        (chainId === ChainId.BSC_TESTNET)
        ?
        xREGO[ChainId.BSC_TESTNET]?.address ?? ''
        :
        (chainId === ChainId.MAINNET)
        ?
        xREGO[ChainId.MAINNET]?.address ?? ''
        :
        xREGO[ChainId.BSC]?.address ?? ''
        )

    return (
        <>
            <Helmet>
                <title>xREGO | Regoswap</title>
            </Helmet>
            <div className="flex flex-wrap w-full w-full min-h-fitContent">
                <div style={{minWidth: 250 }} className=" mb-6 justify-center regobar-side0-box">
                <div >
                     <img style={{ maxHeight: 40 }} src={XSushiSign} alt={'xsushi sign'} /> 
                   
                    </div>
                    <InfoCard />
                    
                  
                </div>
                <div className="middile-logo-box justify-center">
                    <div className="w-full">
                        <div className="mb-4">
                            <APRCard />
                        </div>
                        <div>
                            <StakeCard sushiBalance={sushiBalance} xSushiBalance={xSushiBalance} />
                        </div>
                    </div>
                    
                </div>
                <div className="hidden md:block ml-6">
                        <BalanceCard
                            sushiEarnings={mockData.sushiEarnings}
                            xSushiBalance={xSushiBalance}
                            sushiBalance={sushiBalance}
                            weightedApr={mockData.weightedApr}
                        />
                    </div>
                <div className=" justify-center w-full">
                    <div className="md:hidden  w-full max-w-xl mt-6 mb-20">
                        <BalanceCard
                            sushiEarnings={mockData.sushiEarnings}
                            xSushiBalance={xSushiBalance}
                            sushiBalance={sushiBalance}
                            weightedApr={mockData.weightedApr}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
