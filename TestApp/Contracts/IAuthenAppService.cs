using DTO;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace Contracts
{
    public interface IAuthenAppService
    {
        string GenerateJSONWebToken(UserModel user, IConfiguration configuration);
        UserModel AuthenticateUser(UserModel user);
    }
}
