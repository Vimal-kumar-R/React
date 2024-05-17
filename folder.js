<div className='home-container'>
      <div className='first-box'>
        <h1 className='home-heading'>Unlock your dream job, no matter your background!</h1><br></br>
        <h4>Our learners come from all walks of life.</h4><br></br>
        <p className='home-para'>We’ve seen an Actuarial Mathematics student become a Systems Administrator, a civil engineering graduate turn into a Service Engineer, and a non-coder become a Full Stack Developer.</p><br></br>
        <p className='home-para'>Every student’s story is unique; let KGiSL Microcollege be the start of your next chapter.</p>
      </div>
      <div className='second-box'>
      <form onSubmit={handleSubmit} className='home-form'>
        <label>First name</label><br></br>
        <input type='text' value={name} placeholder='E.g Vimal' onChange={(e)=>setName(e.target.value)}/><br></br>
        <label>Phone Number</label><br></br>
        <input type='number' value={number} placeholder='E.g +9199999999' onChange={(e)=>setNumber(e.target.value)}/><br></br>
        <label>Email</label><br></br>
        <input type='email' value={email} placeholder='E.g rlrv@gmail.com' onChange={(e)=>setEmail(e.target.value)}/><br></br>
        <label>Qulalification</label><br></br>
        <input type='text' value={qualification} placeholder='E.g Bsc' onChange={(e)=>setQualification(e.target.value)}/><br></br>
        <label>Graduation year</label><br></br>
        <input type='number' value={year} placeholder='E.g 2024' onChange={(e)=>setYear(e.target.value)}/><br></br>
        <label>city</label><br></br>
        <input type='text' value={city} placeholder='E.g Coimbatore' onChange={(e)=>setCity(e.target.value)}/><br></br>
        <label>State</label><br></br>
        <input type='text' value={state} placeholder='E.g Tamil Nadu' onChange={(e)=>setState(e.target.value)}/><br></br>
        <button type='submit'>Submit</button>
      </form>
      </div>
      <div className='third-box'>

      </div>
    </div>