<template>
     <Navbar variant="dark" bg="dark" expand="lg" className='sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg'>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <div className="d-flex float-left">
                 
                </div>
                <Container fluid>
                    <Navbar.Collapse id="navbar-dark-example">
                        <div className="navbar-collapse row m-auto ">
                            <div className="navbar-nav col-md-10 ">
                                <a href="/dashboard" className="nav-item dash-link nav-link active bg-secondary d-flex float-left"> Dashboard</a>
                                <a href="/" className="nav-item dash-link nav-link active bg-secondary d-flex float-left"> Homepage</a>
                                <a href="/restmanage" className="nav-item nav-link dash-link d-flex float-left"> Restaurant Manage </a>
                                <a href="/dash" className="nav-item nav-link dash-link d-flex float-left"> Settings </a>
                                <a href="/dash" className="nav-item nav-link dash-link d-flex float-left"> Mode </a>    
                            </div>
                            
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="container-fluid"> 


                <div className="row">

                <div className="col-md-5">                     
                       <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDa08a9vIJ0xpjYwQc8V7pPq9PjHUKmBCu9abOUK5KRrBq6b4d0iWR9386YEKzOGDfrMg&usqp=CAU"
                height="70"
                alt="logo"
                loading="lazy"
                />
                    </div>

                
                   
                    <div className="col-md-7">
                    
                     
                        <br />
                     
                        <h1 className="fredoka"> Hello Admin ! </h1>
                        

                    </div >

                 
                  
                    <div className="col-md-5">                     
                        <a href="/" className="btn btn-dash d-inline" v-on:Click="logout"><span style="color: white">LOGOUT</span></a>
                    </div>
                  

                </div>
            </div>
</template> 

<script>

export default {
    name: "Sidenav",
  
}

</script>