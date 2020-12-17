using App.Base;
using Contracts;
using DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace App.Controllers
{
    public class AuthenController : ProjectBaseController
    {
        private readonly IAuthenAppService _authen;
        public AuthenController(
            ILoggerProject logger, 
            IConfiguration configuration,
            IAuthenAppService authen) 
            : base(logger, configuration) 
        {
            _authen = authen;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] UserModel login)
        {
            IActionResult response = Unauthorized();
            var user = _authen.AuthenticateUser(login);

            if (user != null)
            {
                var tokenString = _authen.GenerateJSONWebToken(user, _configuration);
                response = Ok(new { token = tokenString });
            }

            return response;
        }        
    }
}
