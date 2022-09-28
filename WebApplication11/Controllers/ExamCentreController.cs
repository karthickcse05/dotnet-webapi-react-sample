using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace WebApplication11.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExamCentreController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private ExamCenterDAL.Interface.IExamCenter _examCenter;

        public ExamCentreController(IConfiguration configuration)
        {
            _configuration = configuration;
            _examCenter = new ExamCenterDAL.ExamCenter();
        }

        [HttpGet]
        public JsonResult GetExamCenters()
        {
            string sqlSource = _configuration.GetConnectionString("examcenterconnection");
            return new JsonResult(_examCenter.getExamCenter(sqlSource));
        }
    }
}
