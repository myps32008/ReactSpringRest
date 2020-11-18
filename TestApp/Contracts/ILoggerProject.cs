﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Contracts
{
    public interface ILoggerProject
    {
        void LogInfo(string message);
        void LogWarn(string message);
        void LogDebug(string message);
        void LogError(string message);
    }
}
