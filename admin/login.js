

export default function Login() {
  return (
    <div>
    <div className="app-container app-theme-white body-tabs-shadow">
        <div className="app-container">
            <div className="h-100 bg-plum-plate bg-animation">
                <div className="d-flex h-100 justify-content-center align-items-center">
                    <div className="mx-auto app-login-box col-md-8">
                        <div className="app-logo-inverse mx-auto mb-3"></div>
                        <div className="modal-dialog w-100 mx-auto">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="h5 modal-title text-center">
                                        <h4 className="mt-2">
                                            <div>Welcome back,</div>
                                            <span>Please sign in to your account below.</span>
                                        </h4>
                                    </div>
                                    <form className="">
                                        <div className="form-row">
                                            <div className="col-md-12">
                                                <div className="position-relative form-group">
                                                    <input name="email" id="exampleEmail" placeholder="Email here..." type="email" className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="position-relative form-group">
                                                    <input name="password" id="examplePassword" placeholder="Password here..." type="password" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="position-relative form-check">
                                            <input name="check" id="exampleCheck" type="checkbox" className="form-check-input"/>
                                            <label htmlFor="exampleCheck" className="form-check-label">Keep me logged in</label>
                                        </div>
                                    </form>
                                    <div className="divider"></div>
                                    
                                </div>
                                <div className="modal-footer clearfix">
                                    <div className="float-left">
                                        
                                    </div>
                                    <div className="float-right">
                                        <button className="btn btn-primary btn-lg">Login to Dashboard</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center text-white opacity-8 mt-3">Copyright © ArchitectUI 2019</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}
