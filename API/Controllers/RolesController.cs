using API.Dtos;
using API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RolesController : Controller
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<AppUser> _userManager;

        public RolesController(RoleManager<IdentityRole> roleManager, UserManager<AppUser> userManager)
        {
            _roleManager = roleManager;
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> CreateRole([FromBody] CreateRoleDto createRoleDto)
        {
            if (string.IsNullOrEmpty(createRoleDto.RoleName))
                return BadRequest("Role name is required");

            var roleExist = await _roleManager.RoleExistsAsync(createRoleDto.RoleName);

            if (roleExist)
                return BadRequest("Role already exist");

            var roleResult = await _roleManager.CreateAsync(new IdentityRole(createRoleDto.RoleName));
            if (roleResult.Succeeded)
            {
                return Ok(new { message = "Role Created successfull" });
            }
            return BadRequest("Role creation failed.");
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<RoleResonseDto>>> GetRoles()
        {
            var roles = await _roleManager.Roles.Select(r => new RoleResonseDto
            {
                Id = r.Id,
                Name = r.Name,
                TotalUsers = _userManager.GetUsersInRoleAsync(r.Name!).Result.Count
            }).ToListAsync();
            return Ok(roles);
        }
    }
}