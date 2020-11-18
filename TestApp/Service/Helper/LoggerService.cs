﻿using Contracts;
using NLog;
using System;
using System.Collections.Generic;
using System.Text;

namespace Service.Helper
{
    public class LoggerService : ILoggerProject
    {
        private static readonly ILogger _logger = LogManager.GetCurrentClassLogger();
        public void LogDebug(string message)
        {
            _logger.Debug(message);
        }
        public void LogError(string message)
        {
            _logger.Error(message);
        }
        public void LogInfo(string message)
        {
            _logger.Info(message);
        }
        public void LogWarn(string message)
        {
            _logger.Warn(message);
        }
    }
}
