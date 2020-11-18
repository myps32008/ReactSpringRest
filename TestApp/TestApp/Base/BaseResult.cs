namespace App.Base
{
    public class BaseResult<T>
    {
        public T Data { get; set; }
        public int Code { get; set; }
        public string Message { get; set; }
    }
    public enum RequestCode
    {
        BAD_REQUEST = 500,
        SUCCESS = 200
    }
}
