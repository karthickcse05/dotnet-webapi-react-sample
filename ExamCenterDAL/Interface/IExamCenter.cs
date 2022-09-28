using System;
using System.Collections.Generic;
using System.Text;
using System.Data;

namespace ExamCenterDAL.Interface
{
    public interface IExamCenter
    {
        DataTable getExamCenter(string connectionstring); 
    }
}
