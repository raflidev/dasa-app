import React, { useEffect, useState } from 'react'
import SectionContainer from '../molecules/SectionContainer'
import Logo from '../atoms/Logo'
import InputText from '../atoms/InputText'
import { rupiah } from '../utils/utils'

function Home() {
  const [dualimakoin, setDualimakoin] = useState(0)
  const [limapuluhkoin, setLimapuluhkoin] = useState(0)
  const [seratuskoin, setSeratuskoin] = useState(0)
  const [limaratuskoin, setLimaratuskoin] = useState(0)
  const [seribukoin, setSeribukoin] = useState(0)
  const [seribu, setSeribu] = useState(0)
  const [duaribuan, setDuaribuan] = useState(0)
  const [limaribuan, setLimaribuan] = useState(0)
  const [sepuluhribuan, setSepuluhribuan] = useState(0)
  const [duapuluhribuan, setDuapuluhribuan] = useState(0)
  const [limapuluhribuan, setLimapuluhribuan] = useState(0)
  const [seratusribuan, setSeratusribuan] = useState(0)
  const [totalKoin, setTotalKoin] = useState(0)
  const [totalLembar, setTotalLembar] = useState(0)

  const hitung = () => {
    // koin
    const totalKoin = (dualimakoin * 25) + (limapuluhkoin * 50) + (seratuskoin * 100) + (limaratuskoin * 500) + (seribukoin * 1000)
    // lembar
    const totalLembar = (seribu * 1000) + (duaribuan * 2000) + (limaribuan * 5000) + (sepuluhribuan * 10000) + (duapuluhribuan * 20000) + (limapuluhribuan * 50000) + (seratusribuan * 100000)
    // total
    setTotalKoin(totalKoin)
    setTotalLembar(totalLembar)
  }

  const reset = () => {
    setDualimakoin(0)
    setLimapuluhkoin(0)
    setSeratuskoin(0)
    setLimaratuskoin(0)
    setSeribukoin(0)
    setSeribu(0)
    setDuaribuan(0)
    setLimaribuan(0)
    setSepuluhribuan(0)
    setDuapuluhribuan(0)
    setLimapuluhribuan(0)
    setSeratusribuan(0)
    setTotalKoin(0)
    setTotalLembar(0)

    localStorage.removeItem('uang')
  }

  const simpanSementara = () => {
    const data = {
      dualimakoin,
      limapuluhkoin,
      seratuskoin,
      limaratuskoin,
      seribukoin,
      seribu,
      duaribuan,
      limaribuan,
      sepuluhribuan,
      duapuluhribuan,
      limapuluhribuan,
      seratusribuan
    }
    if(dualimakoin === 0 && limapuluhkoin === 0 && seratuskoin === 0 && limaratuskoin === 0 && seribukoin === 0 && seribu === 0 && duaribuan === 0 && limaribuan === 0 && sepuluhribuan === 0 && duapuluhribuan === 0 && limapuluhribuan === 0 && seratusribuan === 0) {
      localStorage.removeItem('uang')
    }else{
      localStorage.setItem('uang', JSON.stringify(data))
    }
  }

  // local storage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('uang'))
    if (data && dualimakoin === 0 && limapuluhkoin === 0 && seratuskoin === 0 && limaratuskoin === 0 && seribukoin === 0 && seribu === 0 && duaribuan === 0 && limaribuan === 0 && sepuluhribuan === 0 && duapuluhribuan === 0 && limapuluhribuan === 0 && seratusribuan === 0) {
      setDualimakoin(data.dualimakoin)
      setLimapuluhkoin(data.limapuluhkoin)
      setSeratuskoin(data.seratuskoin)
      setLimaratuskoin(data.limaratuskoin)
      setSeribukoin(data.seribukoin)
      setSeribu(data.seribu)
      setDuaribuan(data.duaribuan)
      setLimaribuan(data.limaribuan)
      setSepuluhribuan(data.sepuluhribuan)
      setDuapuluhribuan(data.duapuluhribuan)
      setLimapuluhribuan(data.limapuluhribuan)
      setSeratusribuan(data.seratusribuan)
    }
    simpanSementara()
  }, [dualimakoin, limapuluhkoin, seratuskoin, limaratuskoin, seribukoin, seribu, duaribuan, limaribuan, sepuluhribuan, duapuluhribuan, limapuluhribuan, seratusribuan])

  
  return (
    <SectionContainer>
      <div className="py-4">
        <Logo/>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <InputText text="Jumlah 25 (Koin)" type="number" tabindex="1" value={dualimakoin} setValue={setDualimakoin}/>
        <InputText text="Jumlah 1.000 (Lembar)" type="number" value={seribu} setValue={setSeribu}/>
        <InputText text="Jumlah 50 (Koin)" type="number" tabindex="2" value={limapuluhkoin} setValue={setLimapuluhkoin}/>
        <InputText text="Jumlah 2.000 (Lembar)" type="number" value={duaribuan} setValue={setDuaribuan}/>
        <InputText text="Jumlah 100 (Koin)" type="number" tabindex="3" value={seratuskoin} setValue={setSeratuskoin}/>
        <InputText text="Jumlah 5.000 (Lembar)" type="number" value={limaribuan} setValue={setLimaribuan}/>
        <InputText text="Jumlah 500 (Koin)" type="number" tabindex="4" value={limaratuskoin} setValue={setLimaratuskoin}/>
        <InputText text="Jumlah 10.000 (Lembar)" type="number" value={sepuluhribuan} setValue={setSepuluhribuan}/>
        <InputText text="Jumlah 1.000 (Koin)" type="number" tabindex="5" value={seribukoin} setValue={setSeribukoin}/>
        <InputText text="Jumlah 20.000 (Lembar)" type="number" value={duapuluhribuan} setValue={setDuapuluhribuan}/>
        <div></div>
        <InputText text="Jumlah 50.000 (Lembar)" type="number" value={limapuluhribuan} setValue={setLimapuluhribuan}/>
        <div></div>
        <InputText text="Jumlah 100.000 (Lembar)" type="number" value={seratusribuan} setValue={setSeratusribuan}/>

   
      {
        totalKoin || totalLembar ?
        <>
          <div className='col-span-2 bg-black h-0.5'>
          </div>

          <div className='col-span-2'>

            <div className='flex justify-between'>
              <div>Total (Koin): </div>
              <div>{rupiah(totalKoin)}</div>
            </div>

            <div className='flex justify-between'>
              <div>Total (Lembar): </div>
              <div>
                {rupiah(totalLembar)}
              </div>
            </div>
              
            <div className='flex justify-between'>
              <div>Total Semua: </div>
              <div className='text-xl font-semibold'>{rupiah(totalKoin + totalLembar)}</div>
            </div>
          </div>
        </>
        :
        ''
      }
            



        <button className="btn btn-secondary" onClick={hitung}>Hitung</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
      </div>
    </SectionContainer>
  )
}

export default Home