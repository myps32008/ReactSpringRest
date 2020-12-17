using Contracts;
using DTO;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace Service.Internal
{
    public class AuthenAppService : IAuthenAppService
    {        
        public string GenerateJSONWebToken(UserModel userInfo, IConfiguration config)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                config["Jwt:Issuer"],
                config["Jwt:Issuer"],
                null,
                expires: DateTime.Now.AddMinutes(2),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public UserModel AuthenticateUser(UserModel login)
        {
            UserModel user = null;
            //Validate the User Credentials    
            //Demo Purpose, I have Passed HardCoded User Information    
            user = new UserModel { UserName = "Jignesh Trivedi", Email = "test.btest@gmail.com" };
            return user;
        }
    }
}
